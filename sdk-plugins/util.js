const Contentstack = require("contentstack");

const Stack = Contentstack.Stack({
  api_key: process.env.API_KEY, // stack AD
  delivery_token: process.env.DELIVERY_TOKEN,
  environment: process.env.ENVIRONMENT,
  region: process.env.REGION ? process.env.REGION : "us",
});

export async function getPropertyTypes() {
  try {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    };
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/property/get_property_types`,
      options
    );
    const result = await response.json()
   
    if( result.status ){
      return result
    }else{
      return {status: false, message: "Something went wrong", error: result }
    }
  } catch (error) {
    console.log("🚀 ~ file: util.js:33 ~ getPropertyTypes ~ error", error)
    return {status: false, message: "Something error", error: error }
  }
}

export async function getFeaturedProperties(){
  
    let properties = Stack.ContentType("properties")
      .Query()

      let data = properties.where("is_featured", true).find();

      data.then(function(result) {
        // ‘result’ contains the list of entries where value of ‘title’ is equal to ‘Demo’. 
        return result      
      },function (error) {
          // error function
          return error
      })

}
