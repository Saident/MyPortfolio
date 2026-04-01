import profileImage from "../assets/1764214549495.jpg.jpeg";

const About = () => {
  return (
    <div id="about" className="bg-white px-48 py-16 pt-8">
      {/* About Header Badge */}
      <div className="flex justify-center mb-8">
        <span className="bg-gradient-to-r from-gray-100 to-gray-300 border border-gray-200 text-gray-900 px-6 py-2.5 rounded-full text-sm font-semibold shadow-md">
          About me
        </span>
      </div>

      {/* Content */}
      <div className="flex gap-16 ">
        {/* Left - Image */}
        <div className="flex-shrink-0 pr-12">
          <div className="relative w-72 h-96">
            {/* Background box */}
            <div className="absolute bottom-0 -left-4 w-64 h-92 bg-gray-200"></div>
            {/* Image box */}
            <div className="absolute top-0 left-0 w-64 h-92 bg-gray-300">
              <img src={profileImage} alt="Profile" className="w-full h-full object-cover border-6 border-white" />
            </div>
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="flex-1">
          {/* Section Title */}
          <div className="text-4xl font-bold text-black">
            Curious about me? Here you have it:
          </div>

          <div className="text-gray-600 text-base leading-relaxed">
            <p className="pt-6">
              I'm a passionate software engineer who specializes in full-stack web development. I am very enthusiastic about bringing both the technical and interactive aspects of digital products to life. Creating seamless user experiences, designing clean architecture, and writing readable, highly performant code deeply matter to me.
            </p>

            <p className="pt-4">
              I recently graduated with a degree in Information Technology from the University of Brawijaya, and I'm eager to continue growing and evolving as a developer. I enjoy taking on new challenges, whether that means participating in hackathons or learning the latest tools of the trade. Through my thesis research, volunteer work, and personal projects, I've been building robust backends and full-stack web applications using modern technologies such as GoLang, React.js, Laravel, Node.js, MySQL, and PostgreSQL.
            </p>

            <p className="pt-4">
              I am a proactive problem-solver and enjoy working on products end-to-end, from the initial database architecture all the way to the final user interface.
            </p>

            <p className="pt-4">
              When I'm not in full-on developer mode, you can usually find me casting a line out fishing, brewing a great cup of coffee, catching a movie, or playing games like Valorant. You can connect with me on LinkedIn, or you can follow my latest projects and code on GitHub.
            </p>

            <p className="pt-4">
              Finally, some quick bits about me.
            </p>
            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">•</span>
                <span>Degree in IT</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">•</span>
                <span>Avid learner</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">•</span>
                <span>Problem solver</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">•</span>
                <span>Full-stack developer</span>
              </div>
            </div>

            <p className="pt-4">
              One last thing, I'm available for work, so feel free to reach out and say hello!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
