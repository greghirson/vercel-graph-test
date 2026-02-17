
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2026-02-17 07:30:00", "b": 5000.0}, {"a": "2026-02-17 08:25:00", "b": 4957.5}, {"a": "2026-02-17 09:35:00", "b": 4490.25}, {"a": "2026-02-17 09:40:00", "b": 4343.0}, {"a": "2026-02-17 09:45:00", "b": 4468.6}, {"a": "2026-02-17 09:50:00", "b": 4813.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    