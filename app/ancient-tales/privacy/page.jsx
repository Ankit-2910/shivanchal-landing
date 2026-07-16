import { wrap, inner, brand, h1, sub, h2, p, ul, nav, navLink, footer } from '../styles';

export const metadata = {
  title: 'Privacy Policy — Ancient Tales Publisher',
  description: 'Privacy policy for the Ancient Tales Publisher internal automation tool.',
};

export default function PrivacyPolicy() {
  return (
    <div style={wrap}>
      <div style={inner}>
        <div style={brand}>Shivanchal · Internal Tool</div>
        <h1 style={h1}>Privacy Policy</h1>
        <p style={sub}>Ancient Tales Publisher · Last updated 16 July 2026</p>

        <div style={nav}>
          <a href="/ancient-tales" style={navLink}>Overview</a>
          <a href="/ancient-tales/terms" style={navLink}>Terms of Service</a>
        </div>

        <p style={p}>
          Ancient Tales Publisher is a private, single-user automation tool.
          It is not a public application, does not accept sign-ups, and does
          not collect or process data belonging to any person other than its
          own operator. This policy explains what data the tool accesses and
          how it is used.
        </p>

        <h2 style={h2}>Data accessed</h2>
        <p style={p}>To do its job, the tool connects to Google APIs using OAuth, scoped to accounts the operator personally owns:</p>
        <ul style={ul}>
          <li><strong>Google Drive</strong> — used only to temporarily store a working copy of a video file that the operator submits, and to generate a shareable link for that file. The copy is deleted automatically once the video is published.</li>
          <li><strong>Google Sheets</strong> — used only to append a log row (date, title, link, publish status) to a private spreadsheet the operator owns.</li>
          <li><strong>YouTube Data API</strong> — used only to read the public title, description and tags of a video the operator has already published on their own YouTube channel.</li>
        </ul>
        <p style={p}>
          The tool also sends the same video file and caption to the Facebook
          Graph API and Instagram Graph API, to the operator's own Facebook
          Page and Instagram professional account.
        </p>

        <h2 style={h2}>What is not collected</h2>
        <p style={p}>
          This tool does not collect data about visitors to this website, does
          not use cookies or analytics, does not access any Google, Facebook
          or Instagram account other than the operator's own, and does not
          share any data with third parties beyond the platforms named above
          (Google, Meta/Facebook, Instagram, YouTube), which are used solely
          to publish the operator's own content to the operator's own
          accounts.
        </p>

        <h2 style={h2}>Data retention</h2>
        <p style={p}>
          Video files are stored in Google Drive only temporarily (typically
          under an hour) and are deleted automatically after successful
          publishing. Log rows in Google Sheets are retained indefinitely by
          the operator as a simple publishing history and can be deleted by
          the operator at any time.
        </p>

        <h2 style={h2}>Revoking access</h2>
        <p style={p}>
          Because this tool only ever connects to accounts the operator owns,
          access can be revoked at any time from each platform's own security
          settings (Google Account → Security → Third-party access; Facebook
          Settings → Business Integrations; Instagram Settings → Apps and
          Websites).
        </p>

        <h2 style={h2}>Contact</h2>
        <p style={p}>Questions about this policy can be sent to ankitdubey.aitech@gmail.com.</p>

        <div style={footer}>
          <p>Shivanchal · Bhopal, Madhya Pradesh, India</p>
        </div>
      </div>
    </div>
  );
}
