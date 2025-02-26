import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactUscomponent from "../components/ContactUscomponent";
import Specialist from "../components/main-page/Specialist";

export default function AboutUs() {
    return (
        <div>
            <Header />
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold text-center mb-12">
                    WE WOULD LOVE TO <span className="text-[#c8a27c]">SEE YOU SMILE</span>.
                </h1>
                
                <div className="grid md:grid-cols-3 mt-20 gap-12 mb-12">
                    <div className="space-y-6">
                        <h2 className="text-3xl text-[#c8a27c] font-semibold">
                            quality in your smile.
                        </h2>
                        <p className="text-gray-700  leading-relaxed">
                            Qualident Dental Center is a state-of-the-art Clinic, where general Dentists and specialists work together in one location to provide the best and most comprehensive dental care our patients deserve. Services that range from simple fillings to dental implants.
                        </p>
                    </div>
                    
                    <div className="space-y-6">
                        <h2 className="text-3xl text-[#c8a27c] font-semibold mb-14">
                            
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Our team of providers and staff speak multiple languages where they can communicate directly with our patients to make sure all their dental needs are met.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            We pride ourselves on the best quality customer service backed by decades of clinical experience. And our belief is that healthy mouths always lead to healthy bodies.
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">

                </div>
            </div>
            <Specialist />
            <ContactUscomponent />
            <Footer />
        </div>
    );
}