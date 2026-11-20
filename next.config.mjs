/** @type {import('next').NextConfig} */
import { verifiedCloudinaryAliases } from './cloudinary-aliases.mjs';

const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'boss8zib';

const nextConfig = {
  reactStrictMode: true,
  experimental: {
    cpus: 1,
    workerThreads: false,
  },
  output: 'standalone',
  async redirects() {
    return [
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/IIC-NIET/index.php', destination: '/IIC-NIET', permanent: true },
      { source: '/about.php', destination: '/about', permanent: true },
      { source: '/vision-mission.php', destination: '/vision-mission', permanent: true },
      { source: '/managing-director-message.php', destination: '/managing-director-message', permanent: true },
      { source: '/additional-managing-director-message.php', destination: '/additional-managing-director-message', permanent: true },
      { source: '/director-message.php', destination: '/director-message', permanent: true },
      { source: '/dean-message.php', destination: '/dean-message', permanent: true },
      { source: '/courses.php', destination: '/courses', permanent: true },
      { source: '/advance-courses.php', destination: '/advance-courses', permanent: true },
      { source: '/admissions.php', destination: '/admissions', permanent: true },
      { source: '/admissions/payment-procedure', destination: 'https://axisbpayments.razorpay.com/nietadmission', permanent: false },
      { source: '/admission', destination: '/admissions', permanent: true },
      { source: '/admission/:path*', destination: '/admissions/:path*', permanent: true },
      { source: '/intellectual-capital.php', destination: '/intellectual-capital', permanent: true },
      { source: '/authorities.php', destination: '/authorities', permanent: true },
      { source: '/committee.php', destination: '/committee', permanent: true },
      { source: '/infrastructure.php', destination: '/infrastructure', permanent: true },
      { source: '/placement-pharmacy.php', destination: '/placement-pharmacy', permanent: true },
      { source: '/research.php', destination: '/research', permanent: true },
      { source: '/iqac.php', destination: '/iqac', permanent: true },
      { source: '/policy.php', destination: '/policy', permanent: true },
      { source: '/approvals-and-affiliations.php', destination: '/approvals-and-affiliations', permanent: true },
      { source: '/audit-statements.php', destination: '/audit-statements', permanent: true },
      { source: '/nirf.php', destination: '/nirf', permanent: true },
      { source: '/nietpharmacy-nisp.php', destination: '/nietpharmacy-nisp', permanent: true },
      { source: '/stakeholder-achievement.php', destination: '/stakeholder-achievement', permanent: true },
      { source: '/life-at-niet.php', destination: '/life-at-niet', permanent: true },
      { source: '/event.php', destination: '/event', permanent: true },
      { source: '/gallery.php', destination: '/gallery', permanent: true },
      { source: '/press-releases.php', destination: '/press-releases', permanent: true },
      { source: '/contact-us.php', destination: '/contact-us', permanent: true },
      { source: '/gentech-2.php', destination: '/gentech-2', permanent: true },
      { source: '/ics.php', destination: '/ics', permanent: true },
      { source: '/inner-events-fs.php', destination: '/inner-events-fs', permanent: true },
    ];
  },
  async rewrites() {
    const cldImageBase = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/image/upload`;
    const cldVideoBase = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/video/upload`;
    const cldRawBase = `https://res.cloudinary.com/${CLOUDINARY_CLOUD_NAME}/raw/upload`;

    // Map verified Cloudinary asset aliases (space-to-underscore, canonical names, duplicates)
    const aliasRewrites = verifiedCloudinaryAliases.map((item) => ({
      source: item.source,
      destination: item.resourceType === 'raw'
        ? `${cldRawBase}/${item.destination}`
        : item.resourceType === 'video'
        ? `${cldVideoBase}/${item.destination}`
        : `${cldImageBase}/${item.destination}`,
    }));

    return {
      beforeFiles: [
        // -------------------------------------------------------------
        // 1. SPECIFIC VERIFIED CLOUDINARY ALIASES (Evaluated first)
        // -------------------------------------------------------------
        ...aliasRewrites,
      ],
      afterFiles: [],
      fallback: [
        // -------------------------------------------------------------
        // 2. CONSOLIDATED GENERIC FALLBACKS
        // (Evaluated ONLY after public/ static files are checked!)
        // -------------------------------------------------------------
        // PDFs (Raw & image endpoints)
        {
          source: '/pdf/:path*(.*\\.pdf$)',
          destination: `${cldImageBase}/:path*`,
        },
        {
          source: '/proof/:path*(.*\\.pdf$)',
          destination: `${cldImageBase}/:path*`,
        },

        // Faculty Portraits
        {
          source: '/faculty/:file(.*\\.(?:jpg|jpeg|png|webp)$)',
          destination: `${cldImageBase}/:file`,
        },

        // Infrastructure Facilities (Flat in Cloudinary)
        {
          source: '/images/infra/:file(.*\\.(?:jpg|jpeg|png|webp|svg|gif|ico)$)',
          destination: `${cldImageBase}/:file`,
        },

        // University Toppers (Flat in Cloudinary)
        {
          source: '/images/toper/:file(.*\\.(?:jpg|jpeg|png|webp)$)',
          destination: `${cldImageBase}/:file`,
        },

        // Faculty Achievements (Flat in Cloudinary)
        {
          source: '/images/faculty-achievement/:file(.*\\.(?:jpg|jpeg|png|webp)$)',
          destination: `${cldImageBase}/:file`,
        },

        // Admissions & Accreditations (Flat in Cloudinary)
        {
          source: '/images/why-gall/:file(.*\\.(?:jpg|jpeg|png|webp|svg|gif|ico)$)',
          destination: `${cldImageBase}/:file`,
        },

        // Images & Graphics (Catches all other Cloudinary images not in public/)
        {
          source: '/images/:path*',
          destination: `${cldImageBase}/:path*`,
        },

        // Legacy Scoped Conferences & Videos
        {
          source: '/IIC-NIET/images/:file(.*\\.(?:jpg|jpeg|png|webp|svg|gif|ico)$)',
          destination: `${cldImageBase}/:file`,
        },
        {
          source: '/ics/:path*(.*\\.(?:jpg|jpeg|png|webp|svg|gif)$)',
          destination: `${cldImageBase}/:path*`,
        },
        // Webinar and General Videos
        {
          source: '/webinar-video/:file(.*\\.(?:mp4|webm|mov|avi)$)',
          destination: `${cldVideoBase}/:file`,
        },
        {
          source: '/IIC-NIET/webinar-video/:file(.*\\.(?:mp4|webm|mov|avi)$)',
          destination: `${cldVideoBase}/:file`,
        },
        {
          source: '/videos/:file(.*\\.(?:mp4|webm|mov|avi)$)',
          destination: `${cldVideoBase}/:file`,
        },
      ],
    };
  },
};

export default nextConfig;
