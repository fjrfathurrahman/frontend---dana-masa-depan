import { icons } from "@/resource/icons";
import Title from "../Titles/Title";
import CardFeature from "../Card/CardFeature";

const Features = () => {
  return (
    <section id="features" className="py-16">
      <Title
        title="Keunggulan Kami Untuk Anda."
        desc={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
        }
      />

      <div className="grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <CardFeature
            key={index}
            title="10+ Useful Integrations"
            desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod."
            icon={icons.flash}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
