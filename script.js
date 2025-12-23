
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-12-23 07:00:00", "b": 649.5}, {"a": "2025-12-23 07:05:00", "b": 649.2}, {"a": "2025-12-23 07:10:00", "b": 650.5}, {"a": "2025-12-23 07:15:00", "b": 654.0}, {"a": "2025-12-23 07:20:00", "b": 660.0}, {"a": "2025-12-23 07:25:00", "b": 654.0}, {"a": "2025-12-23 07:30:00", "b": 648.2}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    