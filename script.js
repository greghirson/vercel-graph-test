
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2026-01-05 22:00:00", "b": 592.6}, {"a": "2026-01-05 22:05:00", "b": 593.4}, {"a": "2026-01-05 22:10:00", "b": 589.0}, {"a": "2026-01-05 22:15:00", "b": 567.0}, {"a": "2026-01-05 22:20:00", "b": 554.0}, {"a": "2026-01-05 22:25:00", "b": 539.8}, {"a": "2026-01-05 22:30:00", "b": 539.8}, {"a": "2026-01-05 22:35:00", "b": 533.2}, {"a": "2026-01-05 22:40:00", "b": 516.8}, {"a": "2026-01-05 22:45:00", "b": 500.75}, {"a": "2026-01-05 22:50:00", "b": 503.8}, {"a": "2026-01-05 22:55:00", "b": 512.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    