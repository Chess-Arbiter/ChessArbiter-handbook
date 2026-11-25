import { siteTitle } from "../../../../constants/titles";

export const metadata = {
  title: `Chess Square Color Privacy Policy | ${siteTitle}`,
  description: "Privacy Policy for the Chess Square Color app and web game",
};

export default function SquareColorPrivacyPage() {
  return (
    <>
      <h1>Chess Square Color Privacy Policy</h1>
      <p>Last updated: November 25, 2026</p>
      <p>
        This policy describes how <strong>Chess Square Color</strong>, the
        chess training game for Android and the web, handles your information.
        The short version: the game does not collect, upload or share any
        personal data.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We do not collect any personal information. There are no accounts,
        sign-ups, analytics, advertising or tracking of any kind, and the game
        does not use cookies.
      </p>
      <h2>Information Stored on Your Device</h2>
      <p>
        The game saves the following on your device, so it is ready the next
        time you play:
      </p>
      <ul>
        <li>your best score for each board mode and game time;</li>
        <li>your current untimed streak for each board mode;</li>
        <li>the board mode and game time you last selected.</li>
      </ul>
      <p>
        This information is stored only in the app&apos;s storage or, on the
        web, in your browser&apos;s local storage. It is never sent to us or
        anyone else. You can delete it at any time by clearing the app&apos;s
        storage, uninstalling the app or clearing the site data in your
        browser.
      </p>
      <p>
        The state of a timed game in progress is kept only in memory and is
        lost when you close the game.
      </p>
      <h2>Internet and Offline Use</h2>
      <p>
        The Android app works fully offline. It does not send any data over
        the internet and does not contact any server. The only exception is
        the &quot;Privacy&quot; link, which opens this page in your browser.
      </p>
      <p>
        The web version is hosted on{" "}
        <a href="https://vercel.com/legal/privacy-policy">Vercel</a>. Like any
        web host, Vercel may automatically process technical information such
        as your IP address and browser type to deliver the page and protect
        against abuse. We do not access or use this information.
      </p>
      <h2>App Permissions</h2>
      <p>
        The app includes the standard internet permission that Android apps
        built with React Native receive by default; the app does not use it to
        send any data. It does not request access to your location, contacts,
        camera, microphone, files or any other personal data.
      </p>
      <h2>Children&apos;s Privacy</h2>
      <p>
        Chess Square Color is suitable for all ages. Because it collects no
        personal information, it does not knowingly collect information from
        children.
      </p>
      <h2>Changes to this Privacy Policy</h2>
      <p>
        If this policy changes, the updated version will be published on this
        page with a new &quot;Last updated&quot; date.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, please contact us
        at{" "}
        <a href="mailto:chessarbiter.info@gmail.com">
          chessarbiter.info@gmail.com
        </a>
        .
      </p>
    </>
  );
}
