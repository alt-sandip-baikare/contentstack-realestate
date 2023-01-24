import Stack from "@/sdk-plugins/index";

export default async function handler(req, res) {
  if (req.method === "GET") {
    
    // try {
      const properties = await Stack.getAllProperties(
        "properties",
        []
      );
      res.status(200).json(properties);
      if (properties.status == 200) {
          res.status(200).json(properties);
      } else {
        res
          .status(400)
          .json({
            status: false,
            message: "Something Wront, please try again",
            data: properties,
          });
      }
    // } catch (error) {
    //   console.log("🚀 ~ file: index.js:26 ~ handler ~ error", error)
    //   res.status(500).json({ error: error });
    // }
  } else {
    res.status(400).json({ error: "Method not allowed" });
  }
}
