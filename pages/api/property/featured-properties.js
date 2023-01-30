import Stack from "@/sdk-plugins/index";

export default async function handler(req, res) {
  const featuredProps = await Stack.getFeaturedProps("properties", [], "en-us");

  if (featuredProps.length) {
    res.status(200).json({ status: "success", data: featuredProps });
  } else {
    res.status(400).json({
      status: false,
      message: "Something Wront, please try again",
      data: featuredProps,
    });
  }
}
