import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Posts, { getStaticProps } from "../../pages/posts";
import { getPrismicClient } from "../../services/prismic";

const posts = [
  {
    slug: "fake-slug",
    title: "fake-title",
    excerpt: "fake-excerpt",
    updatedAt: "fake-date",
  },
];

jest.mock("../../services/prismic");

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("fake-title")).toBeInTheDocument();
  });

  it("loads initial data", async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: "fake-uid",
            data: {
              title: [{ type: "heading", text: "fake-heading" }],
              content: [{ type: "paragraph", text: "fake-paragraph" }],
            },
            last_publication_date: "08-10-2021",
          },
        ],
      }),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts: [
            {
              slug: "fake-uid",
              title: "fake-heading",
              excerpt: "fake-paragraph",
              updatedAt: "10 de agosto de 2021",
            },
          ],
        },
      })
    );
  });
});
