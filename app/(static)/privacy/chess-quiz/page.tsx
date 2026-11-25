import { siteTitle } from "../../../../constants/titles";

export const metadata = {
  title: `Chess Quiz Privacy Policy | ${siteTitle}`,
  description: "Privacy Policy for the Chess Quiz Android app",
};

export default function ChessQuizPrivacyPage() {
  return (
    <>
      <h1>Chess Quiz Privacy Policy</h1>
      <p>Last updated: November 25, 2026</p>
      <p>
        This policy describes how <strong>Chess Quiz</strong>, the chess quiz
        app for Android, handles your information. The short version: the app
        does not collect, upload or share any personal data.
      </p>
      <h2>Information We Collect</h2>
      <p>
        We do not collect any personal information. There are no accounts,
        sign-ups, analytics, advertising or tracking of any kind.
      </p>
      <h2>Information Stored on Your Device</h2>
      <p>
        The app saves two things so they are still there the next time you
        play:
      </p>
      <ul>
        <li>your best score for each category and round length;</li>
        <li>the language you chose (English, Armenian or Russian).</li>
      </ul>
      <p>
        These values are stored only on your device. They are never sent to us
        or anyone else. You can delete them at any time by clearing the
        app&apos;s storage or uninstalling the app.
      </p>
      <p>
        Your answers and score in the current round are kept only in memory and
        are lost when you close the app.
      </p>
      <h2>Internet and Offline Use</h2>
      <p>
        The app contains the whole quiz, including all questions, and works
        fully offline. It does not send any data over the internet and does not
        contact any server. Only the &quot;Privacy&quot; link opens this page
        in your browser.
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
        Chess Quiz is suitable for all ages. Because it collects no personal
        information, it does not knowingly collect information from children.
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
