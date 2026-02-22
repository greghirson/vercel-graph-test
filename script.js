
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2026-02-21 11:00:00", "b": 3457.8}, {"a": "2026-02-21 11:05:00", "b": 3565.8}, {"a": "2026-02-21 11:10:00", "b": 2561.8}, {"a": "2026-02-21 11:15:00", "b": 1920.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    