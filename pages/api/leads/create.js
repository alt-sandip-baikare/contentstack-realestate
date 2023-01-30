export default async function handler(req, res) {
  if (req.method === "POST") {
    const body = req.body;
    try {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          api_key: `${process.env.API_KEY}`,
          branch: `${process.env.SUBMISSION_BRANCH}`,
          authtoken: `${process.env.DELIVERY_TOKEN}`,
          authorization: `${process.env.AUTHORIZATION}`, // management token
        },
        body: JSON.stringify({
          entry: body,
        }),
      };
      const response = await fetch(
        "https://api.contentstack.io/v3/content_types/leads/entries?locale=en-us&include_branch=true",
        options
      );
      const data = await response.json();
      if(response.status == 201){
        res.status(201).json(data);
      }else{
        res.status(400).json({error: data.error, data, message: "Error while processing, please try again."});
      }

    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  } else {
    res.status(403).json({ message: "Method not allowd" });
  }
}
