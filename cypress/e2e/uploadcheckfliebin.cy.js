describe("Send Image and check upload", () => {

    it("Upload file and download it in Zip format", () => {
        cy.visit("https://filebin.net/");

        cy.get("#fileField").attachFile("../fixtures/pxfuel.jpg");
        cy.contains("It contains 1 uploaded file").should("be.visible");
        cy.contains("Download files").click();
        cy.contains("Zip")
            .invoke("attr", "href")
            .then((downloadLink) => {
                const absulteLink = "https://filebin.net" + downloadLink;
                cy.log(absulteLink);
                cy.downloadFile(
                    absulteLink,
                    "mydownloads/zipFiles",
                    "downloadedFromCypress.zip"
                );
                cy.readFile("mydownloads/zipFiles/downloadedFromCypress.zip");
            });
    });
});