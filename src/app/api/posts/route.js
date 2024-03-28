//get a data
export async function GET() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const postres = await res.json();
}

//send data
async function sendData() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    method: "POST",
    body: { data: "somedata" },
  });
}
