import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="bg-custom-gradient h-screen flex justify-between items-center px-10 md:p-32 lg:flex-row">
      <div className="flex justify-center flex-col text-center lg:text-left">
        <h1 className="text-3xl font-extrabold text-green-600 pb-1 lg:text-6xl">
          WisePenny
        </h1>
        <p className="text-md lg:text-lg font-medium py-2 text-green-950 pb-5">
          One Stop Solution To Track & Manage Your Expenses and Income.
        </p>
        <Link to={"/dashboard"}>
          <Button className="font-montserrat self-center w-100 bg-green-600 text-sm lg:text-[18px] text-white hover:bg-green-700 py-6 font-medium">
            Get Started
            <ArrowRight className="w-7 h-7 pl-2" />
          </Button>
        </Link>
      </div>
      <div className="w-[36%] hidden lg:block pl-32 lg:pl-0 lg:pr-14 lg:w-[40%]">
        <img src="manage-money.svg" />
      </div>
    </div>
  );
};

export default HomePage;
