import type { Handle, GetSession } from "@sveltejs/kit";
import cookie from "cookie";

export const handle: Handle = async ({ event, resolve }) => {
  const cookies = cookie.parse(event.request.headers.get("cookie") || "");
  event.locals.session = cookies.session ? JSON.parse(cookies.session) : {};

  const response = await resolve(event);

  if (event.locals.session) {
    response.headers.set(
      "set-cookie",
      cookie.serialize("session", JSON.stringify(event.locals.session), {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      })
    );
  }

  return response;
};

export const getSession: GetSession = (event) => {
  return event.locals.session;
};
