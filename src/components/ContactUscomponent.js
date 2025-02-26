
export default function ConsultationForm() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">
        BOOK A FREE <span className="text-[#c8a27c]">CONSULTATION</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info Section */}
        <div className="space-y-6">
          <p className="text-lg font-medium">+90 536 742 41 19</p>
          <p className="text-lg font-medium">info@qualident.com.tr</p>
          <p className="text-lg">
            Hamidiye, Cendere Cd. No:103 D:1B, 34398 <br />
            Kâğıthane/Istanbul/Türkiye
          </p>
        </div>

        {/* Form Section */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 border border-gray-300 rounded-md w-full"
            />
            <input
              type="text"
              placeholder="Phone"
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              placeholder="Email (*)"
              className="p-3 border border-gray-300 rounded-md w-full"
              required
            />
            <input
              type="text"
              placeholder="Company"
              className="p-3 border border-gray-300 rounded-md w-full"
            />
          </div>
          <textarea
            placeholder="Message *"
            className="p-3 border border-gray-300 rounded-md w-full h-32"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-[#c8a27c] text-white py-3 px-6 rounded-full shadow-md hover:bg-[#b48f6b] transition flex items-center justify-center space-x-2"
          >
            <span>SEND</span>
            <span>→</span>
          </button>
        </form>
      </div>
    </div>
  );
};
