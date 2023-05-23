import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import dtitle from "../dtitle";

const Blogs = () => {
  dtitle("Blogs");
  return (
    <div>
      <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
        <div class="w-full mx-auto rounded-lg bg-white shadow-lg px-5 pt-5 pb-10 text-gray-800 ">
          <Card className="mt-6 mx-auto w-8/12">
            <CardBody className="mb-5">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </Typography>
              <Typography className="mb-2">
                An access token is a short-lived token that is used to access
                protected resources. It is typically used to make authenticated
                requests to an API. A refresh token is a long-lived token that
                can be used to obtain new access tokens. It is typically used to
                refresh an expired access token without requiring the user to
                re-authenticate.
              </Typography>
            </CardBody>

            <CardBody className="mb-5">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Compare SQL and NoSQL databases
              </Typography>
              <Typography className="mb-2">
                Relational databases store data in tables, which are made up of
                rows and columns. Each row represents a single record, and each
                column represents a single piece of data about that record. SQL
                is a language that is used to query and manipulate data in
                relational databases. <br />
                Non-relational databases do not store data in tables. Instead,
                they store data in a variety of different formats, such as
                key-value pairs, documents, and graphs. NoSQL databases are
                often used for storing large amounts of data or for storing data
                that does not fit well into a relational model.
              </Typography>
            </CardBody>

            <CardBody className="mb-5">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                What is express js? What is Nest JS?
              </Typography>
              <Typography className="mb-2">
                <b>Ans.</b> Express is a minimal and flexible Node.js web
                application framework that provides a robust set of features for
                building web applications. It is used by millions of developers
                worldwide and is one of the most popular Node.js frameworks.
                NestJS is a progressive Node.js framework that combines the
                features of Express with the power of the Angular framework. It
                provides a robust set of features for building scalable and
                maintainable web applications. NestJS is quickly gaining
                popularity among developers due to its powerful features and
                ease of use.
              </Typography>
            </CardBody>

            <CardBody className="mb-5">
              <Typography variant="h5" color="blue-gray" className="mb-2">
                What is MongoDB aggregate and how does it work?
              </Typography>
              <Typography className="mb-2">
                MongoDB aggregate is a powerful tool that allows you to perform
                complex operations on your data. It uses a pipeline of stages to
                transform your data, and it can be used to perform tasks such as
                grouping, aggregating, and summarizing your data. To use MongoDB
                aggregate, you first need to create a pipeline. A pipeline is a
                sequence of stages that are executed in order. Each stage
                performs an operation on the input data, and the output of one
                stage is passed to the next stage.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
