"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const PORT = process.env.PORT || 8080;
app_1.default.listen(PORT, () => {
    console.log(`Server bound to PORT: ${PORT}`);
});
//# sourceMappingURL=server.js.map