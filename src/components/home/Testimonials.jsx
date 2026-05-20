import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Farhana A.",
    role: "Patient · Dhaka",
    image: "https://i.pravatar.cc/100?img=32",
    review:
      "Booked a cardiologist on a Sunday evening and was seen the next morning. The whole flow felt effortless.",
  },
  {
    name: "Rakib H.",
    role: "Patient · Chittagong",
    image: "https://i.pravatar.cc/100?img=12",
    review:
      "Loved that I could see the doctor's fee and hospital before booking. No surprises at the counter.",
  },
  {
    name: "Nadia K.",
    role: "Mother of two",
    image: "https://i.pravatar.cc/100?img=47",
    review:
      "Used DocAppoint to book a pediatrician for my daughter — instant slot, gentle doctor, brilliant experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="md:w-10/12 mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-cyan-500 font-medium uppercase tracking-wider text-sm">
            Trusted By Thousands
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Real stories from real patients
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              
              {/* Stars */}
              <div className="flex gap-1 text-cyan-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              {/* Review */}
              <p className="text-slate-600 leading-7 mb-8">
                {item.review}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="font-semibold text-slate-900">
                    {item.name}
                  </h4>

                  <p className="text-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}