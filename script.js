
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-04-22 16:00:00", "b": 402.6}, {"a": "2025-04-22 16:05:00", "b": 401.0}, {"a": "2025-04-22 16:10:00", "b": 402.0}, {"a": "2025-04-22 16:15:00", "b": 402.6666666666667}, {"a": "2025-04-22 16:20:00", "b": 402.6}, {"a": "2025-04-22 16:25:00", "b": 401.5}, {"a": "2025-04-22 16:30:00", "b": 403.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    