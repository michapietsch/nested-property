export default function(property) {
  const chain = property.split(".");
  let orNull = false;

  const publicMethods = {
    orNull: () => {
      orNull = true;

      return publicMethods;
    },

    of: object => {
      let path;

      path = object;

      try {
        chain.forEach(level => {
          if (path[level] === undefined)
            throw new Error("Nested property: Property can not be accessed");
          path = path[level];
        });
      } catch (e) {
        if (orNull) {
          return null;
        }

        throw e;
      }

      return path;
    }
  };

  return publicMethods;
}
