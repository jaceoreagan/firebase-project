describe("Static HTML Structure", () => {
  beforeEach(() => {
    document.body.innerHTML = `
            <header>
                <h1 id="site-title">Jace O'Reagan</h1>
            </header>
        `;
  });
  test("contains the correct main body heading", () => {
    const heading = document.getElementById("site-title");
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe("Welcome");
  });
});
