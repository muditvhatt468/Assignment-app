/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://accounts:HJFeh9iOz5nf@ep-aged-mode-a5z6kd43.us-east-2.aws.neon.tech/interview-mocker?sslmode=require',
    }
  };