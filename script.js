
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-30 16:40:00", "b": 400.0}, {"a": "2025-04-30 16:45:00", "b": 401.2}, {"a": "2025-04-30 17:05:00", "b": 404.0}, {"a": "2025-04-30 17:15:00", "b": 463.0}, {"a": "2025-04-30 17:20:00", "b": 429.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    