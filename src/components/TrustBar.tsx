const partners = [
  "Partner 1",
  "Partner 2",
  "Partner 3",
  "Partner 4",
  "Partner 5",
];

export const TrustBar = () => {
  return (
    <section className="py-8 bg-white border-b border-gray-100">
      <div className="container mx-auto px-6 lg:px-12">
        <p className="text-center text-sm text-muted-foreground mb-6">
          Trusted by innovative teams
        </p>
        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-6 py-3 text-gray-300 text-sm font-medium border border-gray-200 rounded bg-gray-50/50"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
