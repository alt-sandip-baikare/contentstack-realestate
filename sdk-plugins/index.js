const contentstack = require("contentstack");

const Stack =
  process.env.API_KEY && process.env.DELIVERY_TOKEN && process.env.ENVIRONMENT
    ? contentstack.Stack({
        api_key: process.env.API_KEY, // stack AD
        delivery_token: process.env.DELIVERY_TOKEN,
        environment: process.env.ENVIRONMENT,
        region: process.env.REGION ? process.env.REGION : "us",
        // Start of Fetchoptions are development purpose only
        // Comment out if you are on production server
        // fetchOptions: {
        //   debug: true,
        //   logHandler: (level, data) => {
        //     if (level === "error" && data) {
        //       const title = [data.name, data.message]
        //         .filter((a) => a)
        //         .join(" - ");
        //       console.error(`[error] ${title}`);
        //       return;
        //     }
        //     console.log(`[${level}] ${data}`);
        //   },
        // },
        // End of Fetchoptions
      })
    : "";

export default {
  /**
   * @param {String} ctUid Content type identifier
   * @param {Array} ref List of reference fields UIDs
   * @param {String} locale Locale identifier
   * @returns Array of objects
   */
  getEntryWithRef(ctUid, ref, locale) {
    return new Promise((resolve, reject) => {
      Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeReference(ref)
        .includeOwner()
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          }
        );
    });
  },
  getEntry(ctUid, locale) {
    return new Promise((resolve, reject) => {
      Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .toJSON()
        .find()
        .then(
          (result) => {
            resolve(result);
          },
          (error) => {
            reject(error);
          }
        );
    });
  },
  getSpecificEntry(ctUid, entryUrl, locale) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .toJSON();
      const data = blogQuery.where("url", `${entryUrl}`).find();
      data.then(
        (result) => {
          resolve(result[0]);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
  getSpecificEntryKeyValue(ctUid, entryKey, entryValue, locale) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .toJSON();
      const data = blogQuery.where(`${entryKey}`, `${entryValue}`).find();
      data.then(
        (result) => {
          resolve(result[0]);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
  getSpecificEntryWihtRef(ctUid, entryUrl, ref, locale) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeReference(ref)
        .toJSON();
      const data = blogQuery.where("url", `${entryUrl}`).find();
      data.then(
        (result) => {
          resolve(result[0]);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
  getAllProperties(ctUid, ref, locale = "en-us", page = 0, perpage = 3) {
    perpage = !perpage ? 3 : perpage;
    let limit = 3;
    let skip = 0;

    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid).Query();

      blogQuery
        // .greaterThan('price', 1000)
        .includeCount()
        .search("Luxury")
        // .addParam('include_count', 'true')
        // .where('price',230000)
        .find()
        .then(
          (result) => {
            resolve(result[0]);
          },
          (error) => {
            reject(error);
          }
        );
    });
  },
  // ajsdl
  getFeaturedProps(ctUid, ref, locale) {
    return new Promise((resolve, reject) => {
      const blogQuery = Stack.ContentType(ctUid)
        .Query()
        .language(locale)
        .includeReference(ref)
        .toJSON();
      let data = blogQuery.where("is_featured", true)

      data = data.limit(3).find();
      data.then(
        (result) => {
          resolve(result[0]);
        },
        (error) => {
          reject(error);
        }
      );
    });
  },
};

const whereClause = (query, key, value) => {
  return query.where(key, `${entryUrl}`).find();
};
