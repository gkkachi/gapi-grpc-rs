initSidebarItems({"enum":[["DnsProvider","The DNS provider of the registration."],["DsState","The publication state of DS records for a `Registration`."]],"mod":[["ds_record",""]],"struct":[["CustomDns","Configuration for an arbitrary DNS provider."],["DsRecord","Defines a Delegation Signer (DS) record, which is needed to enable DNSSEC for a domain. It contains a digest (hash) of a DNSKEY record that must be present in the domain's DNS zone."],["GlueRecord","Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference."],["GoogleDomainsDns","Configuration for using the free DNS zone provided by Google Domains as a `Registration`'s `dns_provider`. You cannot configure the DNS zone itself using the API. To configure the DNS zone, go to Google Domains."]]});