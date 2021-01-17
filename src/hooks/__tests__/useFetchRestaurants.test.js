import { renderHook } from "@testing-library/react-hooks";
// see: https://mswjs.io/
import { rest } from "msw";
import { setupServer } from "msw/node";

import { useFetchRestaurants } from "../useFetchRestaurants";

const mockCategory = "burger";
const query = {
  limit: 50,
  location: "Berlin, Germany",
  term: "restaurants",
  categories: mockCategory
};
const urlParams = new URLSearchParams(query);
const server = setupServer(
  rest.get(`/-/search?${urlParams}`, (req, res, ctx) => {
    return res(ctx.json({ businesses: "BUSINESSES_DATA" }));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("useFetchRestaurants", () => {
  test("should return correct businesses data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchRestaurants(mockCategory)
    );
    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.loading).toEqual(false);
    expect(result.current.businesses).toEqual("BUSINESSES_DATA");
  });
  test("should store businesses data in session storage", async () => {
    const { result } = renderHook(() => useFetchRestaurants(mockCategory));

    expect(result.current.loading).toEqual(false);
    expect(window.sessionStorage.getItem(mockCategory)).toEqual(
      '"BUSINESSES_DATA"'
    );
  });
  //   The request overide does work here (.use() method)
  //   It should work properly see: https://mswjs.io/docs/api/setup-server/use#permanent-override

  //   test("should handle error", async () => {
  //     server.use(
  //       rest.get(`/-/search?${urlParams}`, (req, res, ctx) => {
  //         return res(ctx.status(400), ctx.json({ message: "ERROR" }));
  //       })
  //     );

  //     const { result, waitForNextUpdate } = renderHook(() =>
  //       useFetchRestaurants(mockCategory)
  //     );

  //     await waitForNextUpdate();

  //     expect(result.current.error).toEqual(Error("ERROR"));
  //   });
});
