import React from "react";

import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

const LandingPostCard = ({ img, tag, title, desc, author, date }) => {
  return (
    <Card shadow={true}>
      <CardHeader>
        <img
          src={img}
          alt={title}
          className="h-full w-full scale-110 object-cover"
        />
      </CardHeader>
      <CardBody className="p-6">
        <Typography variant="small" color="blue" className="mb-2 !font-medium">
          {tag}
        </Typography>
        <Typography
          as="a"
          href="#"
          variant="h5"
          color="blue-gray"
          className="mb-2 normal-case transition-colors hover:text-gray-900"
        >
          {title}
        </Typography>
        <Typography className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <div className="flex items-center gap-4">
          <Avatar
            size="sm"
            variant="circular"
            src={author.img}
            alt={author.name}
          />
          <div>
            <Typography
              variant="small"
              color="blue-gray"
              className="mb-0.5 !font-medium"
            >
              {author.name}
            </Typography>
            <Typography
              variant="small"
              color="gray"
              className="text-xs !text-gray-500 font-normal"
            >
              {date}
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default LandingPostCard;
