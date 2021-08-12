import { render, screen } from "@testing-library/react";
import { getSession } from "next-auth/client";
import { mocked } from "ts-jest/utils";
import Post, { getServerSideProps } from "../../pages/posts/[slug]";
import { getPrismicClient } from "../../services/prismic";

const post = {
  slug: "fake-slug",
  title: "fake-title",
  content: "<p>fake-content</p>",
  updatedAt: "fake-date",
};

jest.mock("next-auth/client");
jest.mock("../../services/prismic");

describe("Posts page", () => {
  it("renders correctly", () => {
    render(<Post post={post} />);

    expect(screen.getByText("fake-title")).toBeInTheDocument();
    expect(screen.getByText("fake-content")).toBeInTheDocument();
  });

  it("redirects user if no subscription is found", async () => {
    const getSessionMocked = mocked(getSession);

    getSessionMocked.mockResolvedValueOnce(null);

    const response = await getServerSideProps({
      params: {
        slug: "fake-slug",
      },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        redirect: expect.objectContaining({
          destination: "/",
        }),
      })
    );
  });

  it("lodas initial data", async () => {
    const getSessionMocked = mocked(getSession);
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      getByUID: jest.fn().mockResolvedValueOnce({
        data: {
          title: [{ type: "heading", text: "fake-heading" }],
          content: [{ type: "paragraph", text: "fake-paragraph" }],
        },
        last_publication_date: "08-11-2021",
      }),
    } as any);

    getSessionMocked.mockResolvedValueOnce({
      activeSubscription: "fake-active-subscription",
    } as any);

    const response = await getServerSideProps({
      params: { slug: "fake-slug" },
    } as any);

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          post: {
            slug: "fake-slug",
            title: "fake-heading",
            content: "<p>fake-paragraph</p>",
            updatedAt: "11 de agosto de 2021",
          },
        },
      })
    );
  });
});
