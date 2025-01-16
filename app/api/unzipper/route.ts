import path from "path";
import { Open } from "unzipper";

export async function GET() {
  const filePath = path.join(process.cwd(), "example.txt.zip");
  
  console.log("Reading content from", filePath);

  const directory = await Open.file(filePath);

  const content = (await directory.files[0].buffer()).toString();

  console.log("File content", content);

  return new Response(content);
}
