
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2026-01-06 18:40:00", "b": 405.4}, {"a": "2026-01-06 18:45:00", "b": 439.0}, {"a": "2026-01-06 18:50:00", "b": 456.75}, {"a": "2026-01-06 18:55:00", "b": 497.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    