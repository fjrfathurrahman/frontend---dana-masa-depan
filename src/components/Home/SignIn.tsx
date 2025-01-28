import Image from "next/image";
import FormSignIn from "../Forms/FormSignIn";
import image from "/public/images/content/dashboard.png";

const SignIn: React.FC = () => {
  return (
    <section id="signIn" className="py-16">
      <div>
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 md:grid-cols-2">
          <div className="mx-auto">
            <Image
              src={image.src}
              alt="image"
              width={750}
              height={750}
              quality={100}
              blurDataURL={image.blurDataURL}
            />
          </div>
          <FormSignIn />
        </div>
      </div>
    </section>
  );
};

export default SignIn;
