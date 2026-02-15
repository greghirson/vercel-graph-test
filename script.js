
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2026-02-15 02:00:00", "b": 5000.0}, {"a": "2026-02-15 02:05:00", "b": 3594.0}, {"a": "2026-02-15 02:10:00", "b": 4425.0}, {"a": "2026-02-15 02:50:00", "b": 4855.0}, {"a": "2026-02-15 02:55:00", "b": 4780.5}, {"a": "2026-02-15 03:10:00", "b": 4490.0}, {"a": "2026-02-15 03:30:00", "b": 4405.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    