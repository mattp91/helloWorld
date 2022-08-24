var buster = require("buster");
var fs = require("fs");

buster.testCase("security checks", {
  "puppy patrol": {
    "dog should be not too far from the freezer": function () {
      var security = fs.readFileSync("./security.md", { encoding: "utf8" });
      buster.expect(security).toContain("🐕");
      buster.expect(security).toContain("🥶");

      buster
        .expect(Math.abs(security.indexOf("🐕") - security.indexOf("🥶")))
        .toBeLessThan(5);
    },
    "puppies are cool too": function () {
      var security = fs.readFileSync("./security.md", { encoding: "utf8" });
      buster.expect(security).toContain("🐶");
    },
  },
  "dancing doggo": function () {
    var main = fs.readFileSync("./index.html", { encoding: "utf8" });
    buster.expect(main).toContain("doggo.gif");
  },
  "sausage scanner": {
    "hotdog is a kind of sausage": function () {
      var main = fs.readFileSync("./index.html", { encoding: "utf8" });
      buster.expect(main).toContain("hotdog");
    },
  },
  "cool collector": {
    "ensure project stays cool": function () {
      var test_surface = [
        "./index.html",
        "./tests/main.spec.js",
        "./LICENSE",
        "./ChAnGeLoG.Md",
        "README.md",
        "security.md",
      ].reduce(function (previous, current) {
        return previous.concat(fs.readFileSync(current, { encoding: "utf8" }));
      }, "");

      var coolness = (test_surface.match(/cool/g) || []).length;

      buster.expect(coolness).toBeGreaterThan(6); // @todo Might need to tweak this a bit
    },
  },
});
