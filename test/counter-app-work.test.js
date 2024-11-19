import { html, fixture, expect } from '@open-wc/testing';
import "../counter-app-work.js";

describe("CounterAppWork test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <counter-app-work
        title="title"
      ></counter-app-work>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
