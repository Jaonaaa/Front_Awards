import { renderRoot } from "./index.js";
import { Header } from "./components/Header.js";
// Here you will structure your elements
const header = Header({ attributs: [["id", "header_proto_mid"]] });
renderRoot([header]);
