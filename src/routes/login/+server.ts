import type { RequestHandler } from "@sveltejs/kit";
import cookie from "cookie";

export const POST: RequestHandler = async ({ request, locals }) => {
  const { username } = await request.json();

  if (username === "admin") {
    locals.session = { isLoggedIn: true, username };

    return new Response(JSON.stringify({ username }), {
      status: 200,
      headers: {
        "Set-Cookie": cookie.serialize(
          "session",
          JSON.stringify(locals.session),
          {
            httpOnly: true,
            maxAge: 60 * 60 * 24 * 7, // 1 week
            path: "/",
          }
        ),
      },
    });
  } else {
    return new Response(
      JSON.stringify({ error: "Invalid username or password" }),
      {
        status: 401,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
