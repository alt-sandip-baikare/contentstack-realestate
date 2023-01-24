export default async function handler(req, res) {
   if( req.method === 'GET'){
    try {
        const options = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            api_key: `${process.env.API_KEY}`,
            branch: `${process.env.SUBMISSION_BRANCH}`,
            authtoken: `${process.env.DELIVERY_TOKEN}`,
            authorization: `${process.env.AUTHORIZATION}`,
          },
        };
        const response = await fetch(
          "https://api.contentstack.io/v3/content_types/properties?version=8",
          options
        );
        const result = await response.json()
       
        if( result.status == 200){
          res.status(200).json({status: true, data: result})
        }else{
            res.status(400).json({status: false, message: "Something went wrong", error: result })
        }
      } catch (error) {
        res.status(400).json({status: false, message: "Something went wrong", error: result })
      }
   }else{
    res.status(400).json({message: "Method not supported"})
   }
  }
  