
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2026-02-16 08:00:00", "b": 1335.8}, {"a": "2026-02-16 08:05:00", "b": 1263.8}, {"a": "2026-02-16 08:10:00", "b": 537.2}, {"a": "2026-02-16 08:15:00", "b": 404.0}, {"a": "2026-02-16 10:15:00", "b": 452.0}, {"a": "2026-02-16 10:30:00", "b": 588.0}, {"a": "2026-02-16 10:35:00", "b": 893.0}, {"a": "2026-02-16 10:40:00", "b": 500.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    