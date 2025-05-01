
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-05-01 04:30:00", "b": 523.5}, {"a": "2025-05-01 04:35:00", "b": 517.25}, {"a": "2025-05-01 04:40:00", "b": 512.3333333333334}, {"a": "2025-05-01 04:45:00", "b": 516.0}, {"a": "2025-05-01 04:50:00", "b": 519.75}, {"a": "2025-05-01 04:55:00", "b": 517.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    