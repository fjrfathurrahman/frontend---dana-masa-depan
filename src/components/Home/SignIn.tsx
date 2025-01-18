import Image from "next/image";
import FormSignIn from "../Auth/FormSignIn";
import image from "/public/images/content/home.png";

const SignIn: React.FC = () => {
  return (
    <section id="signIn" className="py-16">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mx-auto">
            <Image
              src={image.src}
              alt="image"
              width={250}
              height={250}
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
