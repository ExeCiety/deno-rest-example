import db from "../config/database.ts";

const tasks = db.collection("tasks");

// LIST
const getAll = async ({ response }: { response: any }) => {
  const data = await tasks.find();

  response.status = 200;
  response.body = {
    success: true,
    message: "Get all tasks data",
    data: data,
  };
};

// SHOW
const findOne = async ({
  response,
  params,
}: {
  response: any;
  params: any;
}) => {
  const data = await tasks.findOne({
    _id: {
      $oid: params.id,
    },
  });

  response.status = 200;
  response.body = {
    success: true,
    message: "Get task with id " + params.id,
    data: data,
  };
};

// ADD
const insertOne = async ({
  response,
  request,
}: {
  response: any;
  request: any;
}) => {
  const body = await request.body();
  const data = body.value;

  await tasks.insertOne(data);

  response.status = 201;
  response.body = {
    success: true,
    message: "Task created",
    data: data,
  };
};

// EDIT
const updateOne = async ({
  response,
  request,
  params,
}: {
  response: any;
  request: any;
  params: any;
}) => {
  const body = await request.body();
  const data = body.value;

  await tasks.updateOne(
    {
      _id: {
        $oid: params.id,
      },
    },
    {
      $set: {
        ...data,
      },
    }
  );

  const result = await tasks.findOne({
    _id: {
      $oid: params.id,
    },
  });

  response.status = 200;
  response.body = {
    success: true,
    message: "Task with id " + params.id + " successfully updated",
    data: result,
  };
};

// DELETE
const deleteOne = async ({
  response,
  params,
}: {
  response: any;
  request: any;
  params: any;
}) => {
  await tasks.deleteOne({
    _id: {
      $oid: params.id,
    },
  });

  response.status = 200;
  response.body = {
    success: true,
    message: "Task with id " + params.id + " successfully deleted",
  };
};

export { getAll, findOne, insertOne, updateOne, deleteOne };
