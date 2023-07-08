import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const SideBar = () => {
  return (
    <div className="w-[40%] mx-2 md:m-4 flex justify-center">
      <Card className="md:w-96 h-max sticky top-0">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src="https://images.unsplash.com/photo-1680687688158-e9165395ff00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
            alt="" className="w-full h-full object-cover"
          />
          
        </CardHeader>
        <CardBody>
          <div className="flex items-center justify-between mb-2">
            <Typography color="blue-gray" className="font-medium">
              Apple iPhone 14 pro
            </Typography>
            <Typography color="blue-gray" className="font-medium">
              (estimated) - $600.00
            </Typography>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            Pre-Owned
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            ROM - 265GB
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            Color - Purple
          </Typography>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            SIM Variation - Single SIM
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className=" bg-blue-100 text-blue-gray-900 shadow-none hover:bg-green-100 hover:shadow-none hover:scale-105 focus:shadow-none focus:scale-105 active:scale-100"
          >
            Sell
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SideBar;
