import { siteTitle } from "../../../../constants/titles";

export const metadata = {
  title: `Chess Clock Privacy Policy | ${siteTitle}`,
  description: "Privacy Policy for the Chess Clock Android app",
};

export default function ChessClockPrivacyPage() {
  return (
    <>
      <h1>Chess Clock Privacy Policy</h1>
      <p>Last updated: November 25, 2026</p>
      <p>
        This policy describes how <strong>Chess Clock</strong>, the chess clock
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
        The app saves the settings you last used, so they are ready the next
        time you play:
      </p>
      <ul>
        <li>
          the time control for each player (minutes, seconds and increment);
        </li>
        <li>
          the &quot;Increment after move&quot; setting (whether it is on and
          the move number).
        </li>
      </ul>
      <p>
        These settings are stored only on your device. They are never sent to
        us or anyone else. You can delete them at any time by clearing the
        app&apos;s storage or uninstalling the app.
      </p>
      <p>
        The state of a game in progress, such as the remaining time on each
        clock, is kept only in memory and is lost when you close the app.
      </p>
      <h2>Internet and Offline Use</h2>
      <p>
        The app works fully offline. It does not send any data over the
        internet and does not contact any server.
      </p>
      <h2>App Permissions</h2>
      <p>
        The app includes the standard internet permission that Android apps
        built with React Native receive by default; the app does not use it to
        send any data. It does not request access to your location, contacts,
        camera, microphone, files or any other personal data. While the app is
        open, it keeps the screen on so it doesn&apos;t turn off in the middle
        of a game; this does not require a permission.
      </p>
      <h2>Children&apos;s Privacy</h2>
      <p>
        Chess Clock is suitable for all ages. Because it collects no personal
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
