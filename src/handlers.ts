import { graphql, http, HttpResponse } from "msw";

export const handlers = [
  http.get("/up", () => {
    return HttpResponse.json({ status: "up" });
  }),
  graphql.query('users', () => {
    return HttpResponse.json({
      data: {
        users: [
          { id: '1', name: 'John Doe' },
          { id: '2', name: 'Jane Doe' },
        ],
      },
    });
  }),
];
