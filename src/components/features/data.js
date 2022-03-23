import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureList = [
  {
    id: 1,
    icon: <FaAccessibleIcon color="#0a1930" size={22} />,
    heading: "Web Design",
    text: "In general, the skills of a web designer are appreciated in an agency and can lead to the responsibilities of project manager and artistic director.",
  },
  {
    id: 2,
    icon: <SiDatabricks color="#0a1930" size={22} />,
    heading: "Front End Web Developer",
    text: "Front-end web development is the HTML, CSS, and JavaScript productions of a web page or application that a user can view and interact with directly.",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#0a1930" size={22} />,
    heading: "Back End Web Developer",
    text: "Back end development can therefore encompass the setting up, configuration and maintenance of several essential components of a web project: The server, where the website will be hosted, which must be running 24 hours a day. It is often managed by a system administrator (sysadmin) or a DevOps.",
  },
  {
    id: 4,
    icon: <FaGg color="#0a1930" size={22} />,
    heading: "Full Stack Web Developer",
    text: "A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well.",
  },
];
