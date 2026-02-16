
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2026-02-15 20:05:00", "b": 4318.5}, {"a": "2026-02-15 20:40:00", "b": 4995.5}, {"a": "2026-02-15 20:50:00", "b": 4501.5}, {"a": "2026-02-15 20:55:00", "b": 4912.0}, {"a": "2026-02-15 21:00:00", "b": 4679.666666666667}, {"a": "2026-02-15 21:05:00", "b": 4831.0}, {"a": "2026-02-15 21:15:00", "b": 4740.0}, {"a": "2026-02-15 22:00:00", "b": 4935.5}, {"a": "2026-02-15 22:35:00", "b": 4816.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    