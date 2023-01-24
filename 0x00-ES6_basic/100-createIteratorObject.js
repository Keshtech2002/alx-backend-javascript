export default function createIteratorObject(report) {
  return {
    [Symbol.iterator]() {
      let values = [];
      for (const val of Object.values(report.allEmployees)) {
        values = [...values, ...val];
      }

      const len = values.length;
      let counter = 0;

      return {
        next() {
          const current = values[counter];
          if (counter < len) {
            counter += 1;
            return { done: false, value: current };
          }
          return { done: true, value: undefined };
        },
      };
    },
  };
}
